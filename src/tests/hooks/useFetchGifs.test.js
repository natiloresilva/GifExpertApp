import {renderHook} from '@testing-library/react-hooks'
import { useFetchGifs } from '../../hooks/useFetchGifs'

describe('Pruebas en el hook useFetchGifs', () => {
    
    test('Debe de retornar el estado inicial', async() => {
        
        const {result, waitForNextUpdate} = renderHook(() => useFetchGifs('Simpsons'))
        const {data, loading} = result.current

        await waitForNextUpdate() 

        //console.log(data, loading)
        expect(data).toEqual([])
        expect(loading).toBeTruthy
    })


        
    test('Debe de retornar un arreglo de imgs y el loading en false', async() => {
        
        // waitForNextUpdate =======> Es una función que retorna una promesa, me va a indicar cuándo se ha realizado un cambio en el estado de nuestro custom hook
        const {result, waitForNextUpdate} = renderHook(() => useFetchGifs('Simpsons'))
        await waitForNextUpdate() 

        const {data, loading} = result.current

        expect(data.length).toBe(10)
        expect(loading).toBeFalsy

       
    })
    
})
