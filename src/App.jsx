import React from 'react'
import Navbar from './common/pages/Navbar'

const App = () => {
  return (
    <div className=' min-w-screen min-h-screen flex justify-center items-center mainBg'>
      <div className=' w-[98%] flex justify-evenly subBg rounded-lg'>
        <div className=" w-[15%] p-5 rounded-lg">
          <Navbar />
        </div>
        <div className=' w-[80%] border p-5'>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt culpa, officia, at veniam fuga itaque porro iste non soluta harum atque tenetur hic! Similique, sint maiores officia velit sed quisquam!</p>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis voluptatum unde officiis! Eaque dignissimos, odit eligendi aspernatur beatae enim necessitatibus. Similique expedita minima molestias? Eos aperiam recusandae ipsa? Repellat, explicabo.
            Maxime voluptates sint explicabo, hic consequatur rerum mollitia, at repudiandae repellat velit dignissimos pariatur eligendi ipsam iste quia est a veritatis odit voluptate eius porro aspernatur ut. Veniam, nulla ad!
            Obcaecati natus, deserunt eum iste corporis, quos ducimus pariatur incidunt placeat error delectus facilis ea nisi, ratione impedit odit molestias facere? Aspernatur facilis laborum aperiam, in ex itaque eos delectus.
            Libero a itaque optio, explicabo suscipit quisquam vitae nobis, odit ratione labore consequuntur deserunt ut enim pariatur culpa cum amet in voluptatibus natus sed officia ipsa repellat. Repellendus, neque similique!
            Quia et quibusdam voluptatum fugiat provident dignissimos perspiciatis iusto facilis, veritatis explicabo doloremque ab, officia sunt non nulla culpa fuga, numquam vitae? Soluta eaque doloribus facere ea tempore repellendus veritatis?
            Dicta aut molestiae incidunt suscipit, ipsum cupiditate! Suscipit, eveniet ullam est veniam exercitationem qui cumque voluptas sit quam facilis dolore expedita eos totam, obcaecati labore corrupti ea sequi. Voluptate, dolorem.</p>
        </div>
      </div>
    </div>
  )
}

export default App
