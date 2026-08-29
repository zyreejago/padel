import{g as e,S as m}from"./ScrollTrigger.CiEuWA-R.js";e.registerPlugin(m);e.from(".page-hero > *",{y:40,opacity:0,duration:.7,stagger:.1,ease:"power3.out",delay:.2});e.from(".contact-grid > *",{y:50,opacity:0,duration:.7,stagger:.15,ease:"power3.out",scrollTrigger:{trigger:".contact-grid",start:"top 80%"}});e.from(".contact-info-item",{x:-30,opacity:0,duration:.5,stagger:.08,ease:"power3.out",scrollTrigger:{trigger:".contact-info-list",start:"top 85%"}});e.from(".faq-item",{y:20,opacity:0,duration:.4,stagger:.06,ease:"power3.out",scrollTrigger:{trigger:".faq-list",start:"top 85%"}});document.getElementById("contactForm")?.addEventListener("submit",o=>{o.preventDefault();const t=new FormData(o.target),r=t.get("name"),n=t.get("phone"),g=t.get("email"),a=t.get("subject"),i=t.get("message");if(!r||!n||!a||!i)return;const s={booking:"Booking",payment:"Pembayaran",venue:"Venue",event:"Event",coaching:"Coaching",other:"Lainnya"},c=`Halo Demo Padel, saya mau bertanya:

Nama: ${r}
WhatsApp: ${n}
${g?`Email: ${g}
`:""}Topik: ${s[a]||a}
Pesan: ${i}`;window.open(`https://wa.me/6281234567890?text=${encodeURIComponent(c)}`,"_blank")});
