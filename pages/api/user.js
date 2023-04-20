import { useSession } from 'next-auth/react';
import prisma from '../../lib/prisma';
import { getSession } from 'next-auth/react'
import { useEffect } from 'react';

export default async function handler(req, res) {
  const { name, email,userid,session } = req.body;
  console.log(session);
  if (!session) {
    res.status(401).json({ message: 'Unauthorized' });
    return;
  }


  try {
    const updatedUser = await prisma.user.update({
      where: { id: userid },
      data: {
        name: name,
        email: email
    },
    });
    res.status(200).json(updatedUser);
    console.log("update user successfully")
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Something went wrong' });
  }
}
