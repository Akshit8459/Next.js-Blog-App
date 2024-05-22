import NavLink from "../NavLinks/navlink"

const linkscomp = () => {
    const linksarr=[
         {name: 'Home', path: '/'},
         {name: 'Blog', path: '/blog'},
            {name: 'About', path: '/about'},
            {name: 'Contact', path: '/contactus'}
        ]
  return (
    <div className="bg-red-400 h-12 w-12">
        {linksarr.map((link => (
                    <NavLink item={link} key={link.name}/>
        )))}
    </div>
  )
}

export default linkscomp