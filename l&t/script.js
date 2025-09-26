$(document).ready(function() {
  const bios = {
    "dj-sonic": "DJ Sonic is a world-famous electronic artist known for electrifying beats and festival anthems.",
    "electro-queen": "Electro Queen is a chart-topping EDM star, bringing high-energy performances to the stage.",
    "the-thunder": "The Thunder is a legendary rock band famous for their explosive live shows and guitar solos.",
    "luna-beats": "Luna Beats is a rising techno DJ, blending cosmic rhythms with deep bass lines.",
    "skyrider": "SkyRider is an indie sensation known for soulful lyrics and dreamy guitar melodies.",
    "echofire": "EchoFire delivers intimate acoustic performances with heartfelt vocals and storytelling."
  };

  $(".bio-btn").click(function() {
    const artistKey = $(this).data("artist");
    $("#artistBioContent").text(bios[artistKey] || "Bio coming soon!");
    $("#artistModal").modal("show");
  });
});
