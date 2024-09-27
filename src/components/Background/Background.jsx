
import React, { Component } from 'react';
import './Background.css';
import { Particle } from './particle.js'

const COLORS = [
    {r: 20, g: 232, b: 30},         //Electric Green
    {r: 0, g: 234, b: 141},         //Teal
    {r: 1, g: 126, b: 213},         //Blue
    {r: 32, g: 18, b: 79},          //Deep Blue
    {r: 56, g: 168, b: 61},         //Deep Green
    {r: 114, g: 71, b: 161},        //Light purple
    {r: 50, g: 10, b: 88},          //Purple
]

class Background extends Component {
    constructor(props) {
        super(props);
        this.canvas = document.createElement('canvas');
        document.body.appendChild(this.canvas);
        this.ctx = this.canvas.getContext('2d');

        this.pixelRatio = (window.devicePixelRatio > 1) ? 2 : 1;

        this.totalParticles = 25;
        this.particles = [];
        this.maxRadius = 600;
        this.minRadius = 300;

        window.addEventListener('resize', this.resize.bind(this), false);
        this.resize();
        window.requestAnimationFrame(this.animate.bind(this));
    }

    resize() {
        this.stageWidth = document.body.clientWidth;
        this.stageHeight = document.body.clientHeight;

        this.canvas.width = this.stageWidth * this.pixelRatio;
        this.canvas.height = this.stageHeight * this.pixelRatio;
        this.ctx.scale(this.pixelRatio, this.pixelRatio);

        this.createParticles();
    }

    createParticles() {
        let curColor = 0;
        this.particles = [];

        for (let i = 0; i < this.totalParticles; i++) {
            const item = new Particle(
                Math.random() * this.stageWidth,
                Math.random() * this.stageHeight,
                Math.random() * (this.maxRadius - this.minRadius) + this.minRadius, COLORS[curColor]
            );

            if (++curColor >= COLORS.length) {
                curColor = 0;
            }

            this.particles[i] = item;

        }
    }

    animate() {
        window.requestAnimationFrame(this.animate.bind(this));

        this.ctx.clearRect(0, 0, this.stageWidth, this.stageHeight);

        for(let i = 0; i < this.totalParticles; i++) {
            const item = this.particles[i];
            item.animate(this.ctx, this.stageWidth, this.stageHeight);
        }
    }

    render() {
        return (
            <div className="background">
            {/* <img className="background" alt={bgimg} src={bgimg}/> */}
            </div>
        );
    }
}

export default Background