import SHeader from "../components/headers/Rangoli";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer3";
import useMediaQuery from "@mui/material/useMediaQuery";
import { supabase } from "../utils/SupabaseClient";
import React from "react";
import useSWR from "swr";
import Scroller from "../components/scroller";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
// import * as dat from "dat.gui";

export default function Home(props) {
  const [status, setStatus] = React.useState(false);
  const m1 = useMediaQuery("(min-width:600px)");

  const { profileCacheHome, errorProfileCacheHome } = useSWR(
    "profileHome",
    fetchTheProfile
  );

  React.useEffect(() => {
    try {
      window.requestAnimFrame = (function () {
        return (
          window.requestAnimationFrame ||
          window.webkitRequestAnimationFrame ||
          window.mozRequestAnimationFrame ||
          function (callback) {
            window.setTimeout(callback, 1000 / 60);
          }
        );
      })();

      var Particles = function () {
        this.oPoint = {
          x: 0,
          y: 0,
        };
        this.addPuffs = false;
        this.maxParticles = 200;
        this.imageSrc =
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKQAAACkCAYAAAAZtYVBAAAAAXNSR0IArs4c6QAADUVJREFUeF7tXW+IXNUV/507yb5Jaj9JLEJgbUsiVkx06bwEDEKk1RYxCqb0g1UEoYnxg6kJjdrGD6b1TzE2fjAmgiBaoWIEE5FWaw1IhM2MXbsJqRhpm4WANMFPtcm8Teae8t7ObmZ3Z3bem7nvz71z/Bb2vnN+53d+vjvv3nPPJch/8xk4wZfh/IWVJebvMPMwoJYDfCWDlhH4cgCrY9I2zqCvCHwWoC8BfZqIJhqgf2Lp4i9wLX0d087ADKOBibRToGPnh0sN9X3WGGHCCIFGAL4iG17oDIPHiDFGCp82SrqGkSUT2fguppfBE+RofUWppNYz800A3wLQsmKlJnqbvk9EHzUa+jDWlr8oFr500QyEIBfV6j/QrG4D8a1gXJMupYatEz4D03uK9LsXK+UPDFsvnDlnBRmJUGMjiDYVjvV+ADHvVwoHXBWnW4Icra9Qiu4BeHPxpuJ+VNju2Whq36c1v+bStO6EIEvV+u2a6X4i3GE67TbYY8ZBRfxywy+/YwPehTBaLchSbfLnzLwNwErbE2EI/0ki2t2oDL1kyF7mZqwUpKrWHwJoT+ZsWeWQt2q//LxVkAFYJUhVnXwAzDtAGLaN6JzwngLod9ofejEn/4ndWiHIUi3YyIxfJ9ghSUyE4w+ME2FXo+K9VfQ4iy3I0WAVKewiYEPRibQBHwOHWGMn1nrHioq3sIJU1eAJADuLSpzluHZp33u8iDEUTpBTuyr0HIDrikiYQ5iOK+KHi7bAXihBqlrwNBg7HEp68UMhPKMr3iNFAVoMQdYmb1DgV8BYVRRiBgoH4ZgG3YfK0Kd5x527IJuL2/vzJkL8A0S0Ke9F9VwFqar1FwDaImIoEgO8V/vlB/NClI8gR88tp9KiV4l5fV6Bi9/ODDDRYW5cvBdrl57OmqfsBVm7cKPS+nXZbck61Qn9MSa0UnejsvjjhE/2NTxTQTZ3XN7sC7E8nCkDRPhJo+IdyMppZoKUj5esUmreT5YfO5kIUlXr2wB61jxVYjE7Bni79su70/aXuiBVNXgUwJNpByL2M2HgMe17T6XpKVVBihjTTF1utlMVZWqClGk6N8Fk4Di96TsVQcoHTAaayNlFWh86xgUpSzs5KyVD92ksCZkVZLjozfpIhpyIq5wZ0KTWmVw8NyfI0XPLFZWOyA5MzgrJ2n24o8ONdaa2GY0JkmqTH8redNZqKIa/aO+7MnSzCTRGBClVOyZSYbsNM1VCfQtSvqhtF5I5/Ca+vPsTZFjpzTxmLiSxZDsDmmikn8rzvgSpasG4HDuwXUKG8YfHISpe3A7D85z3LEg5kGU4kS6Z6+PgWE+CbB5V/YtLHEosZhlQxD/s5YhtT4JU1SDsfCDnps3m0DVrx7XvJT5FmliQ0lHCNd2kGk/iDhnJBDkarFIK46mGIMadYkBrrE7SSyiRIKkaHJTGT07pJfVgogZXvhe7s3FsQZZqwV3MyOywT+pMiYPMGEhSFRRbkKoa/F36M2aWQ9ccjWvfuz5OULEEGXWuBe+NY1DGCAPtGaAtcTr5xhRk8G8AVwnVwkDPDIRlamu8rhrqKkhpMN9zCuTBeQx0b8QfQ5ABC7PCgCkGtO8tqLkF/yilZabSIHamGehWoragIFU1+FwuJRIxGWbgpPa9qzvZ7CjI8Lo2Bh0yDEbMCQMg8IZO1+B1FCQdDd4e1LsDRTPpMhDezchrvDvbeWkvyKlbVU+mC0usDzIDWvPKdrfYthWkVPQMslQyi71tJVAHQdbPuH/fdGbEi6O2DPBZ7ZevmPuneYKUanDRT1YMtKsqnydIdbS+D0SbsgIlfgaYAeb9ek15cysD8wVZlZ2ZAZZI5qHP3bmZJUiZrjPPx8A7nDttzxKkqk7+HuCtA8+SEJAhA7RH+0O/mNlabPWsasE/wLgmQzTiatAZIHymK9735gtSFsMHXRq5xd+6SD4zZUtlT275GHjHrRVAM4JU1eAPAO4eeHaEgDwYeF373s9Cxy2ClN2ZPDIhPkMGLu3aTAly7PywuqhOCTnCQF4M6EX6KowsmYgEKTcn5JUG8TvzdU3Y2Kh4b0WCVEeD34LwmNAjDOTGAONJvcb7VSRIqgZ/IuBHuYERxwPPAAN/Zt/78dQbsjr5H4DnlQINPEtCQIYM0BntD32LcIIvU/+b/G+GnsWVMNCWAf2NoW8SpHG9yKMgDIQN80m+sAuSDYGBsEsayTXCooTiMMDbSUrOipMOQUJ7SFWDPwL4qZAhDBSAgTeIqpN/JbCRixMLEJBAsJgBBn0YviGlM67FSXQM+ngoSGm351hWbQ5HBGlz9hzELoJ0MKk2hySCtDl7DmIXQTqYVJtDEkHanD0HsYsgHUyqzSGJIG3OnoPYRZAOJtXmkESQNmfPQeyydehgUi0OaVyKKyzOnmvQp4srpPzMtczaG88bUqBrb/IcRB4V6Na3AfSsg9FJSNYxwNvlkJd1SXMXcHTIC59MjijNf3M3TInMFgaiY7DSKMCWdLmPc6pRgLRScT/TVkQ43UpFmk1ZkS7XQc5uNiXt+FzPd/Hja23HV6oFdzHjQPFRC0JXGQi/sBsV74C0dHY1w5bFNaul89SHjTS9tyyHDsGd2/Q+EqRcC+JQhm0LZf61IHJxkm05dAdv24uTIFfLuZNhyyJpe7Vc9DtSLt+0LJUOwO14+ebUjo1cT+xAju0KYYHrieUCd7tS6QLaBS9wn1r+kW5oLiTalhi0783ctxlinvWPSJBH6/tAtMmWgASnxQww79dryptbI5gnSJm2LU6wZdDnTtdt35Cya2NZVq2Fe2l3ZsE3ZPN35BMAdlobqwC3gYFd2vcenwt03pQdDZBFchsSajXG1sXwrm/IaC4/GrxNhDusjlrAF5IBZhzkNd6d7cC1f0OGl7pX67cz6FAhIxJQVjNA4A0Nv/xOIkE2f0t+DmCl1dEL+KIxcFL73tWdQHV8Q4YPSAVQ0XJpP57Wyp7Eb8jmW1LusbFfB4WJYO7OTLyv7JZRqlp/CKA9hYlIgFjMAG/Vfvn5hQJYcMqeflAdDU6BMGwxEwI9fwZOad/7djcY8QRZnXwA4L3djMnfhYHODNAW7Q+92I2hWIJs/paUSzq7sSl/78TAuPa96+PQE1uQpVqwkRlvxjEqY4SBVgaIsLFR8d6Kw0psQYbGqBocJGBDHMMyRhgIGWDgEPte7B2/RILEaLBKKYwL1cJAXAa0xmqs9Y7FHZ9MkFMV5VIJFJddGde2oqfvZZ+5BlQ1CBV/nfAtDCzAwHHte6uSMpT4DRk6kKrypDQP3vh21eBxWOhJkNEyUC14GowdcZzImAFjgPCMrniP9BJ1z4JsinIcjMSv5V6AyjOWMEA4pive6l7R9iVI1CZvUMxjvTqX59xjIGxcj8rQp71G1p8gpUStV96dfK5baVmcoPsWZDR1V+svALQljkMZ4yoDvFf75Qf7jc6IIEMQVJv8kJjX9wtInrePASY6zJWhm00gNyZIjJ5brqh0RMrUTKTFIhuMCc2NdVi79LQJ1OYEGaKpXbhRsT5iApjYsIMBTWodKos/NoXWrCCjjxypCjKVnKLbmb45wSRO44IMwcnhMJMpKqYtE1/U7SJLRZDNL2+59riYWjKAirdrv7zbgKF5JlIT5JQog0cBPJkGcLGZGwOPad97Ki3vqQpSRJlW2nKzm6oYw6hSF6RM37mJx7Dj9KbpVqCZCFI+dAxrI2NzaX3AZPpR086ZLAllrCQD7tJY2lkIVmZvyBkQ4eK51q/Ljo4BtaRpItyBUepuk4veceBmL8gQ1ei55VRa9KrsfcdJUfZjor3pxsV7TW0HJokgH0E2EUqVUJJUZTXWTNVOr2hzFaR87PSatnSey/LjpVMEuQsyAhZWnoNfkeMQ6Qitq9Xw2AHovn4qvbv6iDmgGIKcnsLl4FjMtBkc1seBLIMoZkwVSpAhquYR2+fk3Hca6Z5l87gifvhipfxB6p4SOCicIKexS4eMBFlMPjRxR4nkLnp7orCCjMIZDVaRwi5pcNVbcuc+FTV+0tiZpNeOGc/xrRRbkM04SrXgLuboZrGez/vGp8TJkeNE+E2j4h0oenRWCPLSNB518v0lgKuKTmwh8DEmQPRMnM61hcCbVbWP6WClEX8cRrs3mI9jJesxVr0h55LTPCqxTS53mmHmJBHtblSGXspaSKb8WS3IaRLCa/A00/2DejdjeHegIn6503VtpsSShR0nBDlD1NQttvcAvBmgZVkQmJ8PPgvQPq35Nawtf5EfDrOe3RJkCzfRArvGRhBtMktZztaY9yuFA0Vb0DbFirOCbCVoavdH3QbiW8G4xhR5mdghfAam9xTpd10VYSuPAyHIWcIZra8oldR6Zr4J4FuKN7VHU/H7RPRRo6EPuzQdx/kfePAEOZeVsfPDpYaqsMYNTBgh0AjAV8Qhr/8xdIbBY8QYI4WxRkl/gpElE/3btdeCCLJd7k7wZTh3YUUJ/F1mHgbUcoCvZNAyAl+eYMdonEFfEaK33peAPk1EEw2if2HJ4pO4lr62VzrpIP8/z5B0i7BXvVAAAAAASUVORK5CYII=";

        this.canvas = null;
        this.ctx = null;
        this.windX = 0.5;
        this.windY = -5;
        this.alphaDecrease = 0.006;
        this.growingSpeed = 2.9;
        this.jitterX = 2;
        this.jitterY = 1;
        this.speedXJitter = 4;
        this.speedYJitter = 10;
        this.puffs = [];
        this.maxLife = 200;
        this.cWidth = screen.width;
        this.cHeight = screen.height;
        this.img = new Image();
        this.img.src = this.imageSrc;
        this.alphaDie = 0.05;
        this.bornSize = 10;

        this.init = function () {
          var self = this;
          document.onmousemove = function (e) {
            self.oPoint.x = e.clientX;
            self.oPoint.y = e.clientY;
            self.addPuffs = true;

            setTimeout(() => {
              self.addPuffs = false;
            }, 500);
          };

          document.onmousedown = function () {
            self.addPuffs = true;
          };

          document.onmouseup = function () {
            // self.addPuffs = false;
          };
          //CREATE THE CANVAS
          this.canvas = document.createElement("canvas");
          this.canvas.id = "canvas";

          document.body.appendChild(this.canvas);
          document.getElementsByTagName("body")[0].appendChild(canvas);

          this.canvas.width = this.cWidth;
          this.canvas.height = this.cHeight;

          this.applyStyles(canvas);

          this.ctx = canvas.getContext("2d");

          (function animloop() {
            requestAnimFrame(animloop);
            self.tick();
          })();
        };

        this.applyStyles = function (element) {
          element.style.position = "absolute";
          element.style.top = 0;
          element.style.left = 0;
        };

        //STEP DONE EACH FRAME
        this.tick = function () {
          var self = this;
          var puffLength = this.puffs.length;

          //ONLY ADD PUFFS WHEN NEEDED
          if (this.addPuffs && puffLength < this.maxParticles) {
            this.puffs.push(this.newPuff());
          }

          this.ctx.clearRect(0, 0, this.cWidth, this.cHeight);

          //ANIMATE PUFFS PROPERTIES
          for (var i = 0; i < puffLength; i++) {
            var currentPuff = this.puffs[i];
            if (currentPuff) {
              //REMOVE THE CURRENPUFF IF IT HAS GONE INVISIBLE OR IF IT LIVED LONG ENOUGH
              if (
                currentPuff.age == this.maxLife ||
                currentPuff.alpha <= 0.05
              ) {
                this.puffs.splice(0, 1);
              } else {
                currentPuff.posX =
                  currentPuff.posX + (this.windX + currentPuff.speedX);
                currentPuff.posY = currentPuff.posY + this.windY;
                currentPuff.scale += this.growingSpeed;
                currentPuff.age++;
                currentPuff.alpha -= this.alphaDecrease;
                this.render(currentPuff);
              }
            }
          }
        };

        this.newPuff = function () {
          return {
            posX:
              this.oPoint.x + Math.random() * this.jitterX - this.jitterX / 2,
            posY:
              this.oPoint.y + Math.random() * this.jitterY - this.jitterY / 2,
            speedX: Math.random() * this.speedXJitter,
            speedY: Math.random() * this.speedYJitter,
            scale: this.bornSize - 80,
            age: 0,
            alpha: 0.7,
          };
        };

        this.render = function (currentPuff) {
          var puffLength = this.puffs.length;

          this.ctx.globalAlpha = currentPuff.alpha;
          this.ctx.drawImage(
            this.img,
            currentPuff.posX,
            currentPuff.posY,
            currentPuff.scale + 80,
            currentPuff.scale + 80
          );
        };

        this.init();
      };

      try {
        window.onload = function () {
          var particles = new Particles();
          //   var gui = new dat.GUI();
          //   gui.add(particles, "maxParticles", 20, 500);
          //   gui.add(particles, "bornSize", 0, 500);
          //   gui.add(particles, "windX", -30, 30);
          //   gui.add(particles, "windY", -30, 30);
          //   gui.add(particles, "alphaDecrease", 0.001, 0.1);
          //   gui.add(particles, "growingSpeed", 0, 10);
          //   gui.add(particles, "jitterX", 0, 1500);
          //   gui.add(particles, "jitterY", 0, 1500);
          //   gui.add(particles, "speedXJitter", 0, 20);
          //   gui.add(particles, "speedYJitter", 0, 20);
          //   gui.add(particles, "maxLife", 0, 400);
          //   gui.add(particles, "alphaDie", 0, 0.1);
        };
      } catch (err1) {}
    } catch (err) {}
  }, []);

  async function fetchTheProfile() {
    const data = await supabase.auth.user();

    setStatus(data ? true : false);
  }

  async function logOut() {
    await supabase.auth.signOut();
    setStatus(false);
  }

  //   return (
  //     <div
  //       style={{
  //         backgroundColor: "#02CAF9",
  //         width: "500px",
  //         width: "500px",
  //       }}
  //     >
  //       hey
  //     </div>
  //   );
  return (
    <div
      style={{
        backgroundColor: "#000000",
        color: "white",
        minWidth: "100%",
        backgroundImage: "url(" + "/images/back.jpg" + ")",
        backgroundPosition: "center",
        backgroundSize: m1 ? "700px 500px" : "700px 500px",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        scrollBehavior: "smooth",
      }}
    >
      <NavBar code={0} logOut={logOut} status={status} />
      <div style={{ height: m1 ? "40px" : "40px" }}></div>
      <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
        <div style={{ miwidth: "25%" }}></div>
        <div style={{ maxWidth: "50%" }}>{/* <SHeader /> */}</div>
        <div style={{ marginTop: m1 ? "30%" : "100%" }}></div>
        <div style={{ miwidth: "25%" }}></div>
      </div>
      <div style={{ height: m1 ? "20px" : "0px" }}></div>
      <Footer />
    </div>
  );
}
