import { Tr, Td, useDisclosure, Image, Button } from "@chakra-ui/react"
import { useSelector } from "react-redux"
import { axiosInstance } from "../api"
import { useState } from "react"
import { useEffect } from "react"
import DetailPage from "../pages/DetailBook"
import { Link } from "react-router-dom"

const BookCollection = ({
    id,
    image_url,
    title,
    author,
    release_year,
    genre,
    language,
}) => {
    const authSelector = useSelector((state) => state.auth)

    const { isOpen, onOpen, onClose } = useDisclosure()

    // const confirmDeleteBtnHandler = () => {
    //   onClose()
    //   onDelete()
    // }

    const [book, setBook] = useState([])

    const fetchBooks = async () => {
        try {
            const collection = await axiosInstance.get("/book")
            setBook(collection.data.data)
        } catch (err) {
            console.log(err)
        }
    }


    useEffect(() => {
        fetchBooks()
    }, [])

    return (
        <>
            <Tr>
                <Td>
                    <Image maxH={"120px"} src={image_url || ""} />
                </Td>
                <Td>
                    <Link to={`/detail`}>{title}</Link>
                </Td>
                <Td>{author}</Td>
                <Td>{release_year}</Td>
                <Td>{genre}</Td>
                <Td>{language}</Td>
                <Td>
                    <Button>Add</Button>
                </Td>
            </Tr>
        </>
    )
}

export default BookCollection
