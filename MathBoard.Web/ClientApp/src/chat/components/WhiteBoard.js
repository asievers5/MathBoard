import React from 'react'

class WhiteBoard extends React.Component {

    componentDidMount() {
        const canvas = document.getElementById('mathcanvas')
        let ctx = canvas.getContext('2d')

        ctx.font = '64px Arial'
        ctx.textAlign= 'center'
        ctx.strokeText('\u221AChat About Math', canvas.width/2, canvas.height/2)
    }

    render() {
        return (
            <div>
                <p>White Board Component</p>
                <canvas id="mathcanvas" width="800" height="200"></canvas>
            </div>
        )
    }

}

export default WhiteBoard