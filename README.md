# React-NinetyEight
Simple Windows 98 themed draggable window react component.

# Adding the package to your project

```
npm i react-ninetyeight
```


# Creating a simple window



```
import reactLogo from './assets/react.svg'
import Window98 from 'react-ninetyeight'

<Window98
title="Playing a gif!"
width="20vw"
icon={reactLogo}
draggable
actions={['minimize', 'close']}
options={['Lain', 'Settings']}
content={<><img style={{width: "450px", height: "100%"}}src="https://media.tenor.com/v-d5E2Xnv_sAAAAS/lain-serial-experiments-lain.gif"></img></>}
/>
```

![ezgif com-video-to-gif](https://github.com/Tyfee/React-NinetyEight/assets/121516618/81965daa-9e80-47b0-872d-264f380ddb39)



# Attributes

| attribute      | Accepted Values                            
| ----           | ---------------               
| width          | Any  size attribute, like px, vw, or %.                               
| title          | String value.          
| icon           | any image directory or url.           
| color          | First color value for the gradient background of the title, set to 'darkBlue' if empty.
| color2         | Second color value for the gradient background of the title, set to 'royalBlue' if empty.
| draggable      | boolean, set to false if empty.          
| actions        | Can be empty or array with any of the following: 'minimize', 'maximize', 'close' or 'question'.
| options        | Empty or array with any string values.
| content        | Any html content can be placed inside of curly brackets ({<></>}).

