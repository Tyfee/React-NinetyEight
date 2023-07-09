# React-NinetyEight
Simple Windows 98 themed draggable window react component.

# Creating a simple window



`
import Window98 from 'React-NinetyEight'

<Window98
width="20vw"
title="Pay me epitath records!"
actions={['close']}
icon={reactIcon}
/>
`


# Attributes

| attribute      | Accepted Values                            
| ----           | ---------------               
| width          | Any  size attribute, like px, vw, or %.                               
| title          | String value.          
| icon           | any image directory or url.                               
| draggable      | boolean, false if empty.          
| actions        | Empty or array with any of the following: minimize, maximize, close or question.
| options        | Empty or array with any string values.
| content        | Any html content can be placed inside of curly brackets ({}).

