import {Component} from 'react'
import Search from './components/Search'
import './App.css';

const usersList = [{
    uniqueNo: 1,
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Pawan2.jpg/220px-Pawan2.jpg',
    name: 'Pawan kalyan',
    role: 'Actor,Producer,Writer,Politician'
  },
  {
    uniqueNo: 2,
    imageUrl: 'https://assets.gqindia.com/photos/5d67bccd92463800081c1bb4/4:3/w_1440,h_1080,c_limit/Prabhas%20movies%20.jpg',
    name: 'Prabas',
    role: 'Actor'
  },
  {
    uniqueNo: 3,
    imageUrl: 'https://images.indulgexpress.com/uploads/user/imagelibrary/2021/1/8/original/Allu_Arjun.jpg',
    name: 'Allu Arjun',
    role: 'Actor,Dancer'
  },
  {
    uniqueNo: 4,
    imageUrl: 'https://www.tollywood.net/wp-content/uploads/2022/01/Tamil-Actor-confirms-his-film-with-Ravi-Teja.jpg',
    name: 'Raviteja',
    role: 'Actor'
  },
  {
    uniqueNo: 5,
    imageUrl: 'https://www.koimoi.com/wp-content/new-galleries/2020/05/happy-birthday-jr-ntr-from-trained-kuchipudi-dancer-to-playing-lord-ram-here-are-5-lesser-known-facts-about-the-young-tiger-0001.jpg',
    name: 'N.Taraka Ramarao',
    role: 'Actor,Dancer'
  },
  {
    uniqueNo: 6,
    imageUrl: 'https://cdn.gulte.com/wp-content/uploads/2021/08/Nani-1.jpg',
    name: 'Nani',
    role: 'Actor'
  },
  {
    uniqueNo: 7,
    imageUrl: 'https://m.media-amazon.com/images/M/MV5BNmRhODU0MjEtYTQ1Yi00N2E4LWE2MDUtMGRhMDY5M2UxOWNiXkEyXkFqcGdeQXVyMjYwMDk5NjE@._V1_.jpg',
    name: 'Ram Charan',
    role: 'Actor,Dancer'
  },
  {
    uniqueNo: 8,
    imageUrl: 'https://images.indianexpress.com/2021/04/Mahesh-Babu-1200by667.jpg',
    name: 'Mahesh Babu',
    role: 'Actor'
  },
  {
    uniqueNo: 9,
    imageUrl: 'https://static.toiimg.com/photo/msid-62403853/62403853.jpg?110427',
    name: 'Surya',
    role: 'Actor'
  },
  {
    uniqueNo: 10,
    imageUrl: 'https://images.indianexpress.com/2021/08/Chiranjeevi-1200by667.jpg',
    name: 'Chiranjeevi',
    role: 'Actor,Producer'
  },
  {
    uniqueNo: 11,
    imageUrl: 'https://www.filmibeat.com/img/162x203/popcorn/profile_photos/yash-20181218122004-2890.jpg',
    name: 'Yash',
    role: 'Actor'
  },
  {
    uniqueNo: 12,
    imageUrl: 'https://static.toiimg.com/thumb/msid-76260816,imgsize-249293,width-800,height-600,resizemode-75/76260816.jpg',
    name: 'Venakatesh',
    role: 'Actor,Producer'
  },
  {
    uniqueNo: 13,
    imageUrl: 'https://static.toiimg.com/photo/msid-82822085/82822085.jpg?51305',
    name: 'Nagarjuna',
    role: 'Actor,Producer'
  },
]

class App extends Component {
  state = {
    searching: "",
    allUsers:usersList
  }
  changeinput=(event)=>{
    this.setState({searching:event.target.value})
  }
  render() {
    const{allUsers,searching}=this.state
    console.log(searching)
    const searchRes=allUsers.filter((item)=>{
      let newName=item.name.toLowerCase()
      return newName.includes(searching)
    })
    return ( 
      <div className = 'App' >
      <h1> Actors Portfolio</h1>
      <input className='search-1' placeholder='Search here' type='search' onChange={this.changeinput} value={searching}/>
      <ul className='ul-container'>
        {searchRes.map(eachUser=>(
          <Search key={eachUser.uniqueNo} userDetails={eachUser}/>
        ))}
      </ul>
      </div>
    )
  }
}


export default App;