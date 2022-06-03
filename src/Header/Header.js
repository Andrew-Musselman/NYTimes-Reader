import './Header.css';
import Filter from '../Filter/Filter';

const Header = ({getSearchResults}) => {
    return (
        <nav>
            <h1>NYTimes README</h1>
            <Filter getSearchResults={getSearchResults}/>
        </nav>
    )
}

export default Header;