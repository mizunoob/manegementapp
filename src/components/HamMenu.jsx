import React from 'react'
import AllTabs from './AllTabs'
import HamMenuItem from './HamMenuItem'

const HamMenu = () => {
  return (
    <div className="ham-wrap">
      <input id="menu" type="checkbox" />
        <label for="menu" className="open"><i class="fas fa-bars"></i></label>
        <label for="menu" className="back"></label>

        <aside>
            <label for="menu" className="close"><i class="fas fa-times"></i></label>

            <nav>
              <AllTabs />
            </nav>
            <div className="side-footer">
            </div>
        </aside>
    </div>
  )
}

export default HamMenu
