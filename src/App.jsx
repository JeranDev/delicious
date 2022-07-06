import Pages from './pages/Pages'
import Category from './components/Category'
import Search from './components/Search'
import { BrowserRouter } from 'react-router-dom'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { GiKnifeFork } from 'react-icons/gi'

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Nav>
          <GiKnifeFork />
          <Logo to={'/'}>delicious</Logo>
        </Nav>
        <Search />
        <Category />
        <Pages />
      </BrowserRouter>
    </div>
  )
}

const Logo = styled(Link)`
  text-decoration: none;
  font-size: 3rem;
  font-weight: 400;
  font-family: 'Lobster Two', cursive;

  @media screen and (max-width: 1300px) {
    font-size: 2rem;
  }
`

const Nav = styled.div`
  text-decoration: none;
  padding: 4rem 0rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  svg {
    font-size: 3rem;
  }

  @media screen and (max-width: 1300px) {
    justify-content: center;
  }
`

export default App
