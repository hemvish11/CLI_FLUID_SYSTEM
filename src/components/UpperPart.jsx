import React from 'react'

function UpperPart() {
  return (
    <section id='section-upper'>

        <div className='trophy'>
            <img className='img-1' src="./src/images/1.png" />
        </div>

        <div className='award'>
            <p>
                <strong>C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for the 4th time.</strong>
            </p>
            <ul id='list'>

                <li>
                    C.R.I.'s energy efficient products are well recognized by various Government Institutions, as trustworthy products for
                    various projects across the globe to save energy.
                </li>

                <li>
                    C.R.I. is the highest contributor in the country for the projects of EESL (Energy Efficiency Services Limited) to replace the
                    old inefficient pumps with 5 star rated energy efficient smart pumps with IoT enabled control panel.
                </li>

            </ul>
            

            <img className='img-2' src="./src/images/2.png" />

            <p>Government of India has awarded the <strong>"National Energy Conservation Award 2018"</strong>. Mr. G. Selvaraj, 
                Joint Managing Director
                of C.R.I. Group received the award from Smt. Sumitra Mahajan,
                Speaker of Lok Sabha & Shri. Raj Kumar Singh, Honorable
                Minister of State.
            </p>
        </div>

    </section>
  )
}

export default UpperPart