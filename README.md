# react-stick-to-bottom

React component that stick its children to the bottom of the screen if they are below the view (as their normal position)

<p align="center">
    <img src="readme.gif?raw=true" width="256px" />
</p>

Usage:

```
    <div>
        <div style={{ height: '1000px', background: 'lightgray' }}>body</div>
        
        <StickToBottom>
            <div style={{ height: '100px', background: 'beige' }}>
                I stuck to the bottom
            </div>
        </StickToBottom>

        <div style={{ height: '200px', background: 'dimgrey' }}>footer</div>
    </div>
```