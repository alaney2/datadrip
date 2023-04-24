import React from 'react';
import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import IconButton from '@mui/material/IconButton';
import SettingsIcon from '@mui/icons-material/SettingsOutlined';
import SettingsDrawer from '@/components/NavBar/SettingsDrawer'
import NavBar from '@/components/NavBar/NavBar';

export default function Home() {
  const [settingsOpen, setSettingsOpen] = React.useState(false);

  return (
    <>
      <Head>
        <title>Data Drip</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main >
        <NavBar />
      </main>
    </>
  )
}
