import { shallow } from "enzyme"
import { GifGrid } from "../../components/GifGrid"
import { useFetchGifs } from "../../hooks/useFetchGifs"
jest.mock('../../hooks/useFetchGifs')

describe('Pruebas en <GifGrid />', () => {

    test('Debe de mostrar el componente correctamente', () => {

        useFetchGifs.mockReturnValue({
            data: [],
            loading: true
        })

        const wrapper = shallow(<GifGrid category={'Simpsons'}/>)
        
        expect(wrapper).toMatchSnapshot()
    })

    test('Debe de mostrar items cuando se cargan imágenes useFetchGifs', () => {

        const gifs = [{
            id: 'ABC',
            url: 'https://localhost/cualquier/img.jpg',
            title: 'Cualquier cosa'
        }]

        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false
        })
        
        const wrapper = shallow(<GifGrid category={'Simpsons'}/>)

        //Que haga match con el Snapshot
        expect(wrapper).toMatchSnapshot()

        //Que el <p>Loading...</p> no exista
        expect(wrapper.find('p').exists()).toBe(false)

        //Que haya tantos componentes GifGridItem como gifs en el array
        expect(wrapper.find('GifGridItem').length).toBe(gifs.length)
        
    })
})
