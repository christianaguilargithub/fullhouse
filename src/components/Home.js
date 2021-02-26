import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faTimes } from '@fortawesome/free-solid-svg-icons'


const Home = () => {
    return (
        <div>
            <h1 class="fill-current text-indigo-200 hover:text-white text-2xl bg-blue-900">Modernize your home or office with a touch of elegance and style</h1>
            <FontAwesomeIcon icon={faCoffee} /><FontAwesomeIcon icon={faBars} /><FontAwesomeIcon icon={faTimes} />
        </div>
    )
}

export default Home;