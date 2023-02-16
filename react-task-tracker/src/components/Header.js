import Button from "./Button"

const Header = ({title, onAdd, shownColor, shownText}) => {

  return (
   <header className="header">
        <h1>{title}</h1>
        <Button color={shownColor} text={shownText} onClick={onAdd}></Button>
   </header>
   
  )
}

Header.defaultProps = {
    title: "Task Tracker"
}

export default Header