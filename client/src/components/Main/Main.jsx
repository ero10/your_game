import {useSelector} from 'react-redux'
import { Link } from 'react-router-dom'
import style from './main.module.css'

const Main = () => {
  const answers = useSelector((store) => store.answer)

  function findId(id){
  for(let i = 0; i < answers.length; i++){
    if(Number(answers[i].id) === id) return false
  }
  return true
  }

  const arr = [200, 400, 600, 800, 1000]
  return ( 
  <>
    <div className='container-1'>

     <table className={style.table}>
<tbody>
        <tr>
          <th scope="row">Города и страны</th>
          {arr.map((el, i) => {
                const str = '/game/' + (i + 1);
                if (findId(i + 1)) {
          return <td> <Link key={i + 1} to={str}> {el} </Link> </td>

                } else {
                  return <td> </td>
                }
          })}
        </tr>
        <tr>
          <th scope="row">Кино</th>
          {arr.map((el, i) => {
                const str = '/game/' + (i + 6);
                if (findId(i + 6)) {
          return <td> <Link key={i + 6} to={str}> {el} </Link> </td>

                } else {
                  return <td> </td>
                }
          })}
        </tr>
        <tr>
          <th scope="row">Спорт</th>
          {arr.map((el, i) => {
                const str = '/game/' + (i + 11);
                if (findId(i + 11)) {
          return <td> <Link key={i + 11} to={str}> {el} </Link> </td>

                } else {
                  return <td> </td>
                }
          })}
        </tr>

</tbody>
     </table>
    </div>
  </> );
}
 
export default Main;
