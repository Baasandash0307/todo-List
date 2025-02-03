'use client'
import styles from "./page.module.css"
import Title from "../app/components/title/index"
import Input from "../app/components/input/index"
import Tabs from "../app/components/Tabs/index"

import { useState } from "react";
export default function Home() {
  
  return (
    <div className={styles.cardContainer}>
      <Title></Title>
      <Input></Input>
      <Tabs></Tabs>
    </div>
  );
}
