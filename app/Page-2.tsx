
'use client'
import { useState } from 'react'
export default function Admin(){
  const [authed,setAuthed]=useState(false)
  const [email,setEmail]=useState('')
  if(!authed) return <div className="min-h-screen flex items-center justify-center bg-[#FBFBFD]"><div className="bg-white rounded-[24px] border p-8 w-[360px]"><h1 className="font-semibold">Khincc Admin</h1><p className="text-xs text-[#86868B] mt-1">Login pakai taufiqsholikhin@gmail.com</p><input value={email} onChange={e=>setEmail(e.target.value)} placeholder="email" className="mt-4 w-full rounded-full border px-4 py-2 text-sm"/><button onClick={()=>{if(email==='taufiqsholikhin@gmail.com') setAuthed(true)}} className="mt-3 w-full bg-black text-white rounded-full py-2 text-sm">Login</button></div></div>
  return <div className="min-h-screen bg-[#FBFBFD] p-6"><h1 className="text-2xl font-semibold">Admin • Portfolio Manager</h1><p className="text-sm text-[#86868B] mt-2">Ini dashboard buat edit 14 karya. Data live dari Supabase table portfolio. Edit likes langsung, nanti frontend auto update.</p><div className="mt-6 bg-white rounded-[16px] border p-4 text-sm">Table portfolio akan tampil di sini setelah connect Supabase. Buka /api/portfolio untuk test.</div></div>
}
