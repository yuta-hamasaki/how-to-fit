import React, { useEffect, useState } from "react";
import './App.css';

interface User {
  id: number;
  name: string;
}

interface ApiResponse {
  users: User[];
}

function App() {
  const [data, setData] = useState<User[]>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('/api/users');
        
        const jsonData: ApiResponse = await response.json();
        
        // Access the users array from the response object
        setData(jsonData.users);
      } catch (err) {
        console.error('Error fetching users:', err);
      }
    };

    fetchUsers();
  }, []);


  return (
    <div className="p-4">
      <h1 className="text-red-500">Hello World</h1>
      
      <div className="mt-4">
        {data.map((user) => (
          <p key={user.id} className="mb-2">
            {user.name}
          </p>
        ))}
      </div>
    </div>
  );
}

export default App;