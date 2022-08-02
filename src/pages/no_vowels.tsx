import { ChangeEvent, useState } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'

import { Box, Button, Container, Heading, Input, Text } from '@chakra-ui/react'
import { ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons'

const NoVowels: NextPage = () => {
  const [text, setText] = useState("");
  const [hide, setHide] = useState(false);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  }

  return (
    <>
      <Head>
        <title>No Vowels</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container sx={{ py: "3rem" }}>
        <Heading as="h2" sx={{ textAlign: "center" }}>No Vowels</Heading>
        {!hide && (
          <Input
            placeholder='Type something...'
            value={text}
            onChange={handleChange}
            sx={{ my: "1rem" }}
          />
        )}
        <Box sx={{ width: "100%", textAlign: "center", my: "1rem" }}>
          <Button
            aria-label='hide input area'
            onClick={() => setHide(v => !v)}
            leftIcon={hide ? <ChevronDownIcon /> : <ChevronUpIcon />}>
            {hide ? "show" : "hide"}
          </Button>
        </Box>
        {text && (
          <Box borderWidth={1} borderRadius="lg" sx={{ my: "1rem", p: "1rem" }}>
            <Heading as="h3" size="lg" sx={{ textAlign: "center" }}>Result</Heading>
            <Text fontSize="xl" sx={{ letterSpacing: ".5rem" }}>
              {Array.from(text).map(s => {
                if (['a', 'i', 'u', 'e', 'o', 'A', 'I', 'U', 'E', 'O'].includes(s)) {
                  return '_'
                } else {
                  return s
                }
              }).join("")}
            </Text>
          </Box>
        )}
      </Container>
    </>
  )
}

export default NoVowels
