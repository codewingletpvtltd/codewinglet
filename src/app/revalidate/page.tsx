'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

const LoginForm = async (formData: FormData) => {
  'use server';

  const username = formData.get('username') as string;
  const password = formData.get('password') as string;
  const path = formData.get('path') as string;
  const pathType = formData.get('pathType') as 'page' | 'layout';

  if (username === 'Admin' && password === 'Admin@123' && path && pathType) {
    revalidatePath(path, pathType);
  }

  redirect('/');
};

const LoginFormComponent = () => (
  <form
    action={LoginForm}
    className='max-w-md mx-auto p-4 mt-36 bg-placeholderText'
  >
    <div className='mb-4'>
      <label className='block text-gray-700'>Username</label>
      <input
        type='text'
        name='username'
        className='w-full p-2 border border-gray-300 rounded mt-1'
        required
      />
    </div>
    <div className='mb-4'>
      <label className='block text-gray-700'>Password</label>
      <input
        type='password'
        name='password'
        className='w-full p-2 border border-gray-300 rounded mt-1'
        required
      />
    </div>
    <div className='mb-4'>
      <label className='block text-gray-700'>Path</label>
      <input
        type='text'
        name='path'
        className='w-full p-2 border border-gray-300 rounded mt-1'
        required
      />
    </div>
    <div className='mb-4'>
      <label className='block text-gray-700'>Path Type</label>
      <select
        name='pathType'
        className='w-full p-2 border border-gray-300 rounded mt-1'
        required
      >
        <option value='' disabled>
          Select Path Type
        </option>
        <option value='layout'>Layout</option>
        <option value='page'>Page</option>
      </select>
    </div>
    <button type='submit' className='w-full bg-black text-white p-2 rounded'>
      Submit
    </button>
  </form>
);

export default LoginFormComponent;
