// etat initial
gsap.set('.ligne1', {x : -500});
gsap.set('.ligne2', {x : 500});
gsap.set('.text', {opacity: 0, scale: 0});
gsap.set('.site', {opacity: 0, scale: 0});
// box de description
gsap.set('.elt', {opacity: 0, x: -1000, scale: 0});
// etat final
gsap.to('.ligne1', {duration: 1, x: 0, delay: .6, ease: 'power4'});
gsap.to('.ligne2', {duration: 1, x: 0, delay: .6, ease: 'power4'});
gsap.to('.text', {opacity: 1, scale: 1, ease: 'back', delay: 0.7});
gsap.to('.site', {opacity: 1, scale: 1, ease: 'back.In', delay: 0.9});
gsap.to('.elt', {opacity: 1, ease: 'power1.Out', x: 0, scale: 1, delay: 1.5, stagger: 0.4});

// gsap anime