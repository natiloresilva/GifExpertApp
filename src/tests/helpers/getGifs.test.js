import {getGifs} from '../../helpers/getGifs'

describe('Pruebas con getGifs Fetch', () => {
    
    test('Debe de traer 10 elementos', async() => {
        
        const gifs = await getGifs('One Punch')

        expect(gifs.length).toBe(10)
    })

    test('Si no enviamos una categoria debe retornar un array vacío', async() => {
        
        const gifs = await getGifs('')

        expect(gifs.length).toBe(0)
    })
    
})
