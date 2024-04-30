var t1 = gsap.timeline({scrollTrigger:{
    trigger:".two",
    start:"0% 95%",
    end:"50% 50%",
    scrub:"true",
    // markers:"true"
}});

t1.to(".fanta",{
    top:"120%",
    left:"5%"
},"sunny")


t1.to(".orange-cut",{
    top:"160%",
    left:"25%"
},"sunny")

// t1.to(".leaf",{
//     top:"110%",
//     right:"150%"
// },"sunny")

t1.to(".leaf-2",{
    top:"150%",
    left:"10%"
},"sunny")

t1.to(".orange",{
    width:"20vh",
    top:"160%",
    right:"10%"
},"sunny")

t1.to(".coconoutleaf",{
    top:"100%",
    rotate:"360deg",
    left:"0%"
},"sunny")


var t2 =gsap.timeline({scrollTrigger:{
   trigger:".three",
   start:"0% 95%",
   end:"50% 50%",
   scrub:"true",
   markers:"true"
}})

t2.to(".fanta",{
    width:"67vh",
    top:"217%",
    left:"34%"
},"skull")

t2.from(".cococola",{
    // opacity:0,
    rotate:"50%"
})

t2.from(".pepsi",{
    rotate:"-50%"
})

t2.to(".orange-cut",{
    width:"39vh",
    top:"205%",
    left:"41%"
},"skull")
