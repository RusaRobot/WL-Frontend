import {
  Box,
  Button,
  FormControl,
  HStack,
  Input,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react"
import { useSelector } from "react-redux"
import { axiosInstance } from "../api"
import { useState } from "react"
import { useEffect } from "react"
import { Link } from "react-router-dom"
import ReactPaginate from "react-paginate"

const BookCollection = ({ title, author, release_year, genre, language }) => {
 

  return (
    <>
      <HStack>
        <Box>{title}</Box>
        <Box>{author}</Box>
        <Box>{release_year}</Box>
        <Box>{genre}</Box>
        <Box>{language}</Box>
      </HStack>
    </>
  )
}

export default BookCollection
