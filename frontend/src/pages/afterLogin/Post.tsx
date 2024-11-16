import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

type Category = "Chest"| "Back"| "Abs"| "Legs"| "Others"
interface Menu {
  id:string;
  title?: string;
  describe?: string;
  image?: string;
  imageAlt?: string;
  onClick?: () => void;
  className?: string;
  hoverable?: boolean;
  url?: string,
  category?: Category,
  variant?:'bordered' | 'elevated';
}


const Post = () => {
  const [error, setError] = useState<string>('');
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    title:"",
    describe: "",
    image:"",
    url:"",
    category: "",
  })
  
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement| HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };


  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');

    setLoading(true);

    try {
      const response = await fetch('/api/menus/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title:formData.title,
          describe:formData.describe,
          image:formData.image,
          url:formData.url,
          category:formData.category,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Post creation failed');
      }
      setFormData({
        title: "",
        describe: "",
        image: "",
        url: "",
        category: "",
      });
    } catch (err) {
      setError('Faild creating account:( Try again.');
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="flex justify-center flex-col items-center m-5">
      <form onSubmit={handleSubmit}>
        <input
          id="title"
          name="title"
          type="text"
          required
          className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
          placeholder="title"
          value={formData.title}
          onChange={handleChange}
        />
        <textarea
          name="describe"
          rows={4}
          required
        className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
        placeholder='Descrition'
        value={formData.describe}
        onChange={handleChange}
        ></textarea>
        <input
          name="image"
          type="text"
          required
        className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
        placeholder='Image url'
        value={formData.image}
        onChange={handleChange}
        />
        <input 
        type="url"
        name='url'
        className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
        placeholder='URL'
        value={formData.url}
        onChange={handleChange}
        />
        <select 
        name="category"
        className="rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
        value={formData.category}
        onChange={handleChange}
        >
          <option value="">Select category</option>
          <option value="Chest">Chest</option>
          <option value="Back">Back</option>
          <option value="Abs">Abs</option>
          <option value="Legs">Legs</option>
          <option value="Others">Others</option>
        </select>

        <button
        className='
        group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-orange-400 hover:bg-orange-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 disabled:opacity-50
        '
        type="submit"
        disabled={loading}
        >Submit</button>
      </form>
    </div>
  )
}

export default Post
