import { useNavigate, useLocation } from 'react-router-dom';
import queryString from 'query-string';
import { useForm } from '../../hooks/useForm';
import { getHeroesByName } from '../../selectors/getHeroesByName';
import { HeroCard } from '../hero/HeroCard';
import { useMemo } from 'react';

export const SearchScreen = () => {

  const navigate = useNavigate();
  const location = useLocation();
  //si q no existe es igual a un string vacío
  const { q = ''} = queryString.parse(location.search)

  const [ formValues, handleInputChange] = useForm({
      searchText: q,
  });

  const { searchText } = formValues;

  const heroesFiltered = useMemo(()=> getHeroesByName(q), [q] ); //getHeroesByName(q);

  const handleSearch = (e) => {
    e.preventDefault()
    console.log(searchText)
    navigate(`?q=${ searchText }`)
  }

  return (
    <>
        <h1>Búsqueda</h1>
        <hr />
        <div className='row'>
          <div className='col-5'>
            <h4>Buscar</h4>
            <hr />
            <form  onSubmit={handleSearch}>
              <input 
                type="text"
                placeholder='A qué héroe deseas buscar?'
                className='form-control'
                name='searchText'
                autoComplete='off'
                value={ searchText }
                onChange={ handleInputChange }
              />
              <button
                className='btn btn-outline-primary mt-2'
                type='submit'
              >
                Buscar
              </button>
            </form>
          </div>

          <div className='col-7'>
            <h4>Resultados</h4>
            <hr/>

            {
                (q === '')
                  ? <div className='alert alert-info'>
                  Busca un héroe
                  </div>
                  : ( heroesFiltered.length === 0)
                    && <div className='alert alert-danger'>
                    No hay resultados para : { q }
                    </div>

            }
            {
              heroesFiltered.map( h => (
                <HeroCard
                  key={ h.id }
                  {...h}
                />
              ))
            }
          </div>
        </div>
    </>
  )
}
