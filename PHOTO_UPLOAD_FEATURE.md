# Photo Upload Feature - Documentation

## ✅ Features Implemented

### 1. **Authentication Required**
- Users **must be signed in** with Google to upload photos
- Shows a beautiful sign-in prompt for non-authenticated users
- Automatic authentication check before allowing uploads

### 2. **Drag & Drop Upload**
- Modern drag-and-drop interface
- Click to browse files option
- Support for multiple file uploads at once
- Visual feedback during drag operations

### 3. **File Validation**
- **Accepted formats**: PNG, JPG, JPEG, GIF, WEBP
- **Maximum size**: 10MB per photo
- Automatic validation with clear error messages
- Only image files are allowed

### 4. **Database Storage**
Files are saved with complete metadata:
- User ID (who uploaded)
- File name
- File URL (public access path)
- File size
- MIME type
- Upload timestamp
- Optional caption

### 5. **Beautiful UI**
- Animated upload progress
- Real-time photo gallery display
- Hover effects on uploaded photos
- Responsive grid layout (2/3/4 columns)
- Loading spinners and success animations

## 📁 File Structure

```
src/
├── app/
│   └── api/
│       └── upload/
│           └── route.ts          # Upload API endpoint
├── components/
│   └── PhotoUpload.tsx           # Main upload component
└── prisma/
    └── schema.prisma             # Photo model added

public/
└── uploads/                      # Uploaded photos storage
```

## 🔧 How It Works

### User Flow:

1. **Unauthenticated User**:
   - Sees "Sign In to Share Your Photos" message
   - Must click "Sign in with Google" button
   - Redirected to Google OAuth
   - After sign-in, can upload photos

2. **Authenticated User**:
   - Sees drag-and-drop zone
   - Can drag photos or click to browse
   - Photos upload with progress indicator
   - Uploaded photos appear in grid below

### Technical Flow:

```
1. User selects/drops photo
   ↓
2. PhotoUpload component validates file
   ↓
3. Sends to /api/upload endpoint
   ↓
4. API checks authentication
   ↓
5. Validates file type & size
   ↓
6. Saves to /public/uploads/
   ↓
7. Creates database record
   ↓
8. Returns photo data
   ↓
9. Component displays uploaded photo
```

## 🗄️ Database Schema

```prisma
model Photo {
  id          String   @id @default(auto())
  userId      String
  user        User     @relation(fields: [userId], references: [id])
  fileName    String
  fileUrl     String
  fileSize    Int
  mimeType    String
  uploadedAt  DateTime @default(now())
  caption     String?
}
```

## 🎨 UI Components

### Sign-In Prompt (Unauthenticated)
- Lock icon
- "Sign In to Share Your Photos" heading
- Description text
- Google sign-in button

### Upload Zone (Authenticated)
- Upload cloud icon
- "Drag & drop your photos here" text
- "or click to browse" subtitle
- File format and size hints
- Animated drag-active state

### Uploading State
- Spinning loader
- "Uploading your photos..." message

### Photo Gallery
- Grid layout (responsive)
- Hover effects with file name
- Smooth animations
- Auto-updates as photos upload

## 🔒 Security Features

✅ Authentication required for uploads
✅ File type validation (images only)
✅ File size limits (10MB max)
✅ Unique filenames (timestamp-based)
✅ Database tracking of all uploads
✅ User association with photos

## 📱 Mobile Support

- ✅ Responsive design
- ✅ Touch-friendly drag & drop
- ✅ Mobile file picker
- ✅ Grid adjusts to screen size
- ✅ Optimized for phone cameras

## 🚀 Usage

The photo upload section appears on the main page between the Video Gallery and RSVP sections.

### For Users:
1. Scroll to "Share Your Memories" section
2. Sign in with Google (if not already)
3. Drag & drop photos or click to browse
4. Photos upload automatically
5. See uploaded photos in grid below

### For Developers:
```typescript
import PhotoUpload from '@/components/PhotoUpload';

// Use in any page
<PhotoUpload />
```

## 📍 Location on Page

The upload section is located at:
- **After**: Video Gallery
- **Before**: RSVP Section
- **Section Title**: "Share Your Memories"

## 🎯 Benefits

1. **Guest Engagement**: Guests can share their perspective
2. **Memory Collection**: Automatic photo gathering
3. **Authenticated**: Only real guests can upload
4. **Organized**: All photos linked to uploading user
5. **Professional**: Beautiful, modern interface
6. **Mobile-Friendly**: Easy to upload from phones

## 🔄 Future Enhancements (Optional)

- Photo moderation/approval
- Captions for photos
- Photo gallery view for all uploads
- Download all photos feature
- Photo albums/categories
- Share to social media
- Photo contest/voting

## 📊 Viewing Uploaded Photos

All uploaded photos are saved in:
- **Filesystem**: `/public/uploads/`
- **Database**: MongoDB `Photo` collection

To view all photos in database:
```bash
# Access your MongoDB database
# Collection: Photo
# View all records with user info
```

## ✅ Testing Checklist

- [ ] Upload works only when signed in
- [ ] Drag & drop functions correctly
- [ ] Click to browse opens file picker
- [ ] File validation works (type & size)
- [ ] Photos save to /public/uploads/
- [ ] Database records created
- [ ] Photos display in grid
- [ ] Mobile upload works
- [ ] Error messages display properly
- [ ] Multiple uploads work

---

**Your photo upload feature is ready to use!** 📸

Guests can now share their beautiful wedding moments directly on your website!
