import '@testing-library/jest-dom'
import { shallow } from "enzyme"
import { AddCategory } from "../../components/AddCategory"

describe('Pruebas en <AddCategory />', () => {
    
    //Necesito mandarl la función, ya que es requerida
    const setCategories = jest.fn()
    let wrapper = shallow(<AddCategory setCategories={setCategories} />)

    beforeEach(() => {
        jest.clearAllMocks()
        wrapper = shallow(<AddCategory setCategories={setCategories} />)
    })

    test('Debe de mostrarse correctamente', () => {

        expect(wrapper).toMatchSnapshot()

    })




    test('Debe de cambiar la caja de texto', () => {
        
        const input = wrapper.find('input')
        const value = 'Hola Mundo'

        input.simulate('change', {target: {value}})

        expect(wrapper.find('p').text().trim()).toBe(value)
    })




    test('No debe postear la información  con submit', () => {
        
       wrapper.find('form').simulate('submit', {preventDefault(){}})

       expect(setCategories).not.toHaveBeenCalled()

    })



    test('Debe de llamar el setCategories y limpiar la caja de texto', () => {

        const input = wrapper.find('input') 
        const value = 'Hola Mundo'

        //Simular el inputChange
        input.simulate('change', {target: {value}})

        //Simular el submit
        const form = wrapper.find('form');    
        form.simulate('submit', {preventDefault(){}})

        //setCategories se debe de haber llamado al menos una vez
        expect(setCategories).toHaveBeenCalled()

        //Si quisiera determinar que debe llamarse dos veces puedo utilizar ======>  expect(setCategories).toHaveBeenCalledTimes(2)
        //O si espero que sea llamado por cualquier función podría utilizar ======>  expect(setCategories).toHaveBeenCalledWith(expect.any(Function))

        //Evaluamos si la caja de texto se limpió
        expect(wrapper.find('input').prop('value')).toBe('')
 
     })
    
    
})
