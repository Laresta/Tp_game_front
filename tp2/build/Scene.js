"use strict";
//==================================================================================================
// ANIMATION WITH TYPESCRIPT                                                               Scene.ts
//                                                                                By Bruno Bachelet
//==================================================================================================
// Copyright (c) 2017-2023
// Bruno Bachelet - bruno@nawouak.net - http://www.nawouak.net
//
// This program is free software; you can redistribute it and/or modify it
// under the terms of the GNU General Public License as published by the Free
// Software Foundation; either version 2 of the license, or (at your option)
// any later version.
//
// This program is distributed in the hope that it will be useful, but WITHOUT
// ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
// FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License for
// more details (http://www.gnu.org).
// S c e n e  Class //------------------------------------------------------------------------------
class Scene extends Sprite {
    //---------------------------------------------------------------------------------------Attributes
    resize_;
    scale_;
    //--------------------------------------------------------------------------------------Constructor
    constructor(element, resize) {
        super(element);
        this.resize_ = resize;
        this.scale_ = 1;
        let box = this.getParentNode().getBoundingClientRect();
        this.setDimension(640, 480);
        this.setX((box.width - this.getWidth()) / 2);
        this.setY((box.height - this.getHeight()) / 2);
    }
    //-------------------------------------------------------------------------------------isFullscreen
    isFullscreen() { return (document.fullscreenElement != null); }
    //---------------------------------------------------------------------------------toggleFullscreen
    toggleFullscreen(event) {
        if (this.isFullscreen()) {
            this.getElement().className = "";
            document.exitFullscreen();
        }
        else {
            this.getElement().className = "fullscreen";
            document.body.requestFullscreen();
        }
        event.stopPropagation();
    }
    //-------------------------------------------------------------------------------------------resize
    resize() {
        let space = (this.isFullscreen() ? 0 : 50);
        let box = this.getParentNode().getBoundingClientRect();
        let rx = this.getWidth() / (box.width - space);
        let ry = this.getHeight() / (box.height - space);
        let s = 1 / Math.max(rx, ry);
        if (this.resize_ || this.isFullscreen()) {
            this.getStyle().transform = "scale(" + s + ")";
            this.scale_ = s;
        }
        else {
            this.getStyle().transform = "";
            this.scale_ = 1;
        }
        this.setX((box.width - this.getWidth()) / 2);
        this.setY((box.height - this.getHeight()) / 2);
    }
    //-------------------------------------------------------------------------------------scaledMouseX
    scaledMouseX(x) {
        return (this.getCenterX() + (x - this.getCenterX()) / this.scale_);
    }
    //-------------------------------------------------------------------------------------scaledMouseY
    scaledMouseY(y) {
        return (this.getCenterY() + (y - this.getCenterY()) / this.scale_);
    }
    //--------------------------------------------------------------------------------------------start
    start() { }
    //--------------------------------------------------------------------------------------------pause
    pause() { }
    //------------------------------------------------------------------------------------------unpause
    unpause() { }
    //--------------------------------------------------------------------------------------------clean
    clean() {
        while (this.getChildren().length > 0)
            this.removeChild(this.getChildren()[0]);
    }
    //------------------------------------------------------------------------------------------restart
    restart() {
        this.pause();
        this.clean();
        this.start();
    }
}
// End //-------------------------------------------------------------------------------------------
