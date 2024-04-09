import Search from "antd/es/input/Search"

export interface SearchProps {
    placeholder: string
    onSearch: (value: any) => any
}
const SearchComponent = ({placeholder, onSearch }: SearchProps) => {

    return <Search placeholder={placeholder} onSearch={onSearch} enterButton />
}

export default SearchComponent