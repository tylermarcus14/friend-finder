// ===============================================================================
// DATA
// Below data will hold all of the possible friends.
// Start with an array that hold 10 object to coincide with the 10 questions 
//each object will have a key value pair of
//name: (a string of the person name)
// photo (with a link)
// scores array (10 strings to coincide with the answers options)
// ===============================================================================


var friends = [
    {
        name: "Tyler",
        picture: "https://vignette.wikia.nocookie.net/fightclub/images/5/59/Tyler-durden-1.jpg",
        scores: [2, 3, 4, 1, 5, 2, 3, 4, 5, 2,]
    },
    {
        name: "Chad",
        picture: "https://theblacksheeponline.com/wp-content/uploads/2018/01/PurFratGuy.jpg",
        scores: [1, 2, 5, 3, 4, 5, 5, 4, 4, 1,]
    },
    {
        name: "Brad",
        picture: "http://cdn.totalfratmove.com/wp-content/uploads/2015/02/07b51f446978cdfe77d724b570310647.png",
        scores: [4, 4, 3, 3, 2, 2, 2, 2, 2, 2]
    },
    {
        name: "John",
        picture: "https://upload.wikimedia.org/wikipedia/commons/0/04/John_Legend_2019_by_Glenn_Francis.jpg",
        scores: [5, 5, 5, 5, 5, 5, 5, 5, 5, 5]
    },
    {
        name: "Dwight",
        picture: "https://pbs.twimg.com/profile_images/549268771484229632/WnatiHzT_400x400.jpeg",
        scores: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    },
    {
        name: "Michael",
        picture: "http://cdn3.whatculture.com/images/2018/11/e46c3d8de0c01966-600x338.jpg",
        scores: [1, 2, 5, 5, 2, 2, 3, 1, 4, 1]
    },
    {
        name: "Cindy",
        picture: "https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTE5NDg0MDU1MjE5NjM1NzI3/cindy-crawford-9542465-1-402.jpg",
        scores: [2, 5, 5, 3, 3, 3, 3, 2, 3, 4]
    },
    {
        name: "Linda",
        picture: "https://www.kirkland.com/-/media/professionals/m/myers-linda-k-pc.jpg",
        scores: [3, 4, 3, 2, 5, 4, 3, 3, 3, 2]
    },
    {
        name: "Amanda",
        picture: "https://pmcvariety.files.wordpress.com/2017/08/amanda-cerny.jpg",
        scores: [1, 3, 5, 2, 3, 5, 5, 3, 4, 2]
    },
    {
        name: "Eric",
        picture: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Eric_Trump_by_Gage_Skidmore.jpg/220px-Eric_Trump_by_Gage_Skidmore.jpg",
        scores: [3, 3, 3, 3, 3, 3, 3, 3, 3, 3]
    },
    {
        name: "Ethan",
        picture: "https://static.parade.com/wp-content/uploads/2018/08/EthanHawke-FTR.jpg",
        scores: [2, 2, 2, 2, 2, 2, 2, 2, 2, 2]
    },
  
  ];
  
  // Here we export the array. This makes it accessible to other files using require.
  module.exports = friends;