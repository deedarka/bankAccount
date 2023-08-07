import Container from 'react-bootstrap/esm/Container';
import image from '../img/spinner.gif'
import '../index.css';

const LoadingSpinner = () => {
    return (
        <Container>
            <div className="loading-spinner flex" id="container">
                <img className='flex-item' src={image}></img>
            </div>
        </Container>
    )
}

export default LoadingSpinner