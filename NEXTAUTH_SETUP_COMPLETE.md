# NextAuth Implementation - Complete Setup Guide

## ✅ What's Already Configured

NextAuth has been fully implemented in your wedding invitation project with the following features:

### 1. **Database Schema (MongoDB)**
- ✅ User model with name, email, image
- ✅ Account model for OAuth providers
- ✅ Session model for user sessions
- ✅ VerificationToken model
- ✅ Prisma Client generated

**Location**: `prisma/schema.prisma`

### 2. **Authentication Configuration**
- ✅ NextAuth v5 configured with MongoDB adapter
- ✅ Google OAuth provider integrated
- ✅ Session management with database strategy
- ✅ Custom callbacks for user session

**Files Created**:
- `src/lib/auth.ts` - Main auth configuration
- `src/app/api/auth/[...nextauth]/route.ts` - API route handler

### 3. **UI Components**
- ✅ SessionProvider wrapper for app-wide auth state
- ✅ GoogleSignIn button component with beautiful design
- ✅ Automatic user profile display when signed in
- ✅ Sign out functionality

**Files Created**:
- `src/components/Providers.tsx` - Session provider wrapper
- `src/components/GoogleSignIn.tsx` - Google sign-in UI component

### 4. **Environment Variables**
Your `.env` file is already configured with:
- ✅ `DATABASE_URL` - MongoDB connection string
- ✅ `NEXTAUTH_URL` - Your app URL
- ✅ `NEXTAUTH_SECRET` - Generated secret key
- ✅ `GOOGLE_CLIENT_ID` - Your Google OAuth client ID
- ✅ `GOOGLE_CLIENT_SECRET` - Your Google OAuth client secret

## 🔧 Final Step Required

### Update Google OAuth Authorized Redirect URIs

Since you already have your Google OAuth credentials configured, you just need to ensure the redirect URI is correct:

1. **Go to Google Cloud Console**:
   - Visit https://console.cloud.google.com/
   - Select your project

2. **Navigate to Credentials**:
   - Go to "APIs & Services" → "Credentials"
   - Click on your OAuth 2.0 Client ID: `74570250389-3sa40paagre87ehm5fe8orih9s9a3k4f.apps.googleusercontent.com`

3. **Update Authorized Redirect URIs**:
   Make sure these URIs are added:

   **For Development:**
   ```
   http://localhost:3000/api/auth/callback/google
   ```

   **For Production (when deployed):**
   ```
   https://yourdomain.com/api/auth/callback/google
   ```

4. **Save Changes**

## 🚀 How to Test

1. **Start your development server**:
   ```bash
   npm run dev
   ```

2. **Visit your app**:
   ```
   http://localhost:3000
   ```

3. **Look for the "Sign in with Google" button** in the top-right corner

4. **Click it** and you'll be redirected to Google's OAuth consent screen

5. **After signing in**:
   - Your name, email, and profile picture will be displayed in the top-right
   - Your user data will be automatically saved to MongoDB
   - You can sign out using the "Sign Out" button

## 📊 How It Works

### User Flow:

1. **First Visit**:
   - User sees "Sign in with Google" button
   - Clicks button → Redirected to Google OAuth

2. **Google Authentication**:
   - User signs in with their Google account
   - Google redirects back to your app with auth code

3. **Database Storage**:
   - NextAuth creates/updates user record in MongoDB
   - Saves OAuth account information
   - Creates a session

4. **Authenticated State**:
   - User profile displayed in top-right corner
   - Session persists across page visits
   - User data available throughout the app

### What Gets Saved to MongoDB:

**User Collection**:
```javascript
{
  _id: ObjectId,
  name: "User's Name",
  email: "user@gmail.com",
  image: "https://lh3.googleusercontent.com/...",
  emailVerified: null,
  createdAt: ISODate,
  updatedAt: ISODate
}
```

**Account Collection**:
```javascript
{
  _id: ObjectId,
  userId: ObjectId (reference to User),
  type: "oauth",
  provider: "google",
  providerAccountId: "google-user-id",
  access_token: "...",
  token_type: "Bearer",
  scope: "openid email profile",
  id_token: "..."
}
```

**Session Collection**:
```javascript
{
  _id: ObjectId,
  sessionToken: "unique-session-token",
  userId: ObjectId (reference to User),
  expires: ISODate
}
```

## 🎨 UI Features

The GoogleSignIn component includes:
- ✅ Beautiful animated button with Google logo
- ✅ Loading state while checking authentication
- ✅ User profile card when signed in:
  - Profile picture
  - Name
  - Email
  - Sign out button
- ✅ Smooth animations using Framer Motion
- ✅ Responsive design
- ✅ Backdrop blur effect

## 🔐 Security Features

- ✅ Secure session management with NextAuth
- ✅ CSRF protection built-in
- ✅ Encrypted session tokens
- ✅ OAuth 2.0 standard compliance
- ✅ Automatic token refresh
- ✅ Database-backed sessions

## 📱 Using Auth in Your Components

### Get Current User Session:

```typescript
'use client';
import { useSession } from 'next-auth/react';

export default function MyComponent() {
  const { data: session, status } = useSession();

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (session) {
    return (
      <div>
        <p>Welcome, {session.user?.name}!</p>
        <p>Email: {session.user?.email}</p>
      </div>
    );
  }

  return <div>Please sign in</div>;
}
```

### Programmatic Sign In/Out:

```typescript
import { signIn, signOut } from 'next-auth/react';

// Sign in
<button onClick={() => signIn('google')}>
  Sign In
</button>

// Sign out
<button onClick={() => signOut()}>
  Sign Out
</button>
```

### Server-Side Auth (Server Components):

```typescript
import { auth } from '@/lib/auth';

export default async function ServerComponent() {
  const session = await auth();

  if (!session) {
    return <div>Not authenticated</div>;
  }

  return <div>Welcome {session.user?.name}</div>;
}
```

## 🗄️ View Your Database

To see the users who have signed in:

```bash
# Open MongoDB Compass or use MongoDB CLI
# Connection string from your .env:
mongodb+srv://akshaychavhan676:akshaychavhan676@cluster0.3muaw0n.mongodb.net/
```

Or if you have MongoDB Compass installed, connect using the DATABASE_URL from your `.env` file.

## 🐛 Troubleshooting

### Error: "redirect_uri_mismatch"
- Make sure you added `http://localhost:3000/api/auth/callback/google` to Google Console
- Check for typos in the redirect URI
- Restart your dev server

### Error: "Invalid client_id"
- Verify GOOGLE_CLIENT_ID in `.env` matches Google Console
- No extra spaces or quotes in `.env` file

### Users not being saved
- Check MongoDB connection string is correct
- Run `npx prisma generate` to ensure Prisma Client is updated
- Check MongoDB Atlas IP whitelist (allow 0.0.0.0/0 for development)

### Session not persisting
- Clear browser cookies and cache
- Check NEXTAUTH_SECRET is set in `.env`
- Restart development server

## 📚 Additional Resources

- [NextAuth Documentation](https://next-auth.js.org/)
- [Google OAuth Setup](https://console.cloud.google.com/)
- [Prisma with MongoDB](https://www.prisma.io/docs/concepts/database-connectors/mongodb)

## 🎉 Summary

Your NextAuth implementation is **complete and ready to use**! Just update the redirect URI in Google Cloud Console and you're good to go. When users sign in with Google, their name and email will automatically be saved to your MongoDB database.
