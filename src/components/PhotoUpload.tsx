'use client';

import { useSession, signIn } from 'next-auth/react';
import { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

interface UploadedPhoto {
  id: string;
  fileName: string;
  fileUrl: string;
  uploadedAt: string;
}

export default function PhotoUpload() {
  const { data: session, status } = useSession();
  const [uploadedPhotos, setUploadedPhotos] = useState<UploadedPhoto[]>([]);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const onDrop = useCallback(async (acceptedFiles: File[]) => {
    if (!session) {
      setError('Please sign in to upload photos');
      return;
    }

    setError(null);
    setUploading(true);

    try {
      for (const file of acceptedFiles) {
        const formData = new FormData();
        formData.append('file', file);

        const response = await fetch('/api/upload', {
          method: 'POST',
          body: formData,
        });

        if (!response.ok) {
          const data = await response.json();
          throw new Error(data.error || 'Upload failed');
        }

        const data = await response.json();
        setUploadedPhotos((prev) => [...prev, data.photo]);
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to upload photos');
    } finally {
      setUploading(false);
    }
  }, [session]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'image/*': ['.png', '.jpg', '.jpeg', '.gif', '.webp']
    },
    maxSize: 10 * 1024 * 1024, // 10MB
    multiple: true,
    disabled: !session || uploading,
  });

  if (status === 'loading') {
    return (
      <div className="flex items-center justify-center p-12">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-pink-600"></div>
      </div>
    );
  }

  if (!session) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center p-12 bg-white/80 backdrop-blur-sm rounded-xl shadow-lg"
      >
        <div className="mb-6">
          <svg
            className="mx-auto h-16 w-16 text-pink-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
            />
          </svg>
        </div>
        <h3 className="elegant-font text-2xl font-semibold text-gray-800 mb-4">
          Sign In to Share Your Photos
        </h3>
        <p className="text-gray-600 mb-6">
          Please sign in with Google to upload and share your wedding photos
        </p>
        <button
          onClick={() => signIn('google')}
          className="inline-flex items-center space-x-3 bg-pink-600 hover:bg-pink-700 text-white font-semibold py-3 px-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="white">
            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
          </svg>
          <span>Sign in with Google</span>
        </button>
      </motion.div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Dropzone */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative"
      >
        <div
          {...getRootProps()}
          className={`border-2 border-dashed rounded-xl p-12 text-center cursor-pointer transition-all duration-300 ${
            isDragActive
              ? 'border-pink-600 bg-pink-50'
              : uploading
              ? 'border-gray-300 bg-gray-50 cursor-not-allowed'
              : 'border-gray-300 hover:border-pink-400 bg-white/80 backdrop-blur-sm'
          }`}
        >
          <input {...getInputProps()} />

          {uploading ? (
            <div className="space-y-4">
              <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-pink-600 mx-auto"></div>
              <p className="text-lg text-gray-600">Uploading your photos...</p>
            </div>
          ) : (
            <>
              <svg
                className="mx-auto h-16 w-16 text-pink-400 mb-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                />
              </svg>
              {isDragActive ? (
                <p className="text-xl text-pink-600 font-semibold">
                  Drop your photos here!
                </p>
              ) : (
                <div className="space-y-2">
                  <p className="text-xl text-gray-700 font-semibold">
                    Drag & drop your photos here
                  </p>
                  <p className="text-gray-500">or click to browse</p>
                  <p className="text-sm text-gray-400">
                    (Max 10MB per photo • PNG, JPG, JPEG, GIF, WEBP)
                  </p>
                </div>
              )}
            </>
          )}
        </div>
      </motion.div>

      {/* Error Message */}
      <AnimatePresence>
        {error && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg"
          >
            <p className="font-medium">Upload Error</p>
            <p className="text-sm">{error}</p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Uploaded Photos */}
      {uploadedPhotos.length > 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="space-y-4"
        >
          <h3 className="elegant-font text-2xl font-semibold text-gray-800">
            Your Uploaded Photos ({uploadedPhotos.length})
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {uploadedPhotos.map((photo, index) => (
              <motion.div
                key={photo.id}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="relative group overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                <Image
                  src={photo.fileUrl}
                  alt={photo.fileName}
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                  <p className="text-white text-sm font-medium truncate">
                    {photo.fileName}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}
    </div>
  );
}
