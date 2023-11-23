<template>
  <div class="blog-section">
    <h3>Recent Posts</h3>
    <div class="blog-cards">
      <BlogCard
        v-for="blog in blogs"
        :key="blog.id"
        :img="blog.img"
        :title="blog.title"
        :desc="blog.desc"
        :id="blog.id"
      />
    </div>
  </div>
</template>

<script>
import BlogCard from "./BlogCard.vue";
export default {
  data() {
    return {
      blogs: [
        {
          title: "Level Up Your Appeal with Jaw Exercisers",
          img: "blog-img-one.png",
          desc: "Greetings, young men who are enthusiastic about self-improvement! Are you seeking to take your confidence, charm, and overall appeal to the next level? Your search is over, for we have the ultimate solution that will leave everyone amazed – jaw exercisers! In this blog post, we will unveil the secrets of achieving a chiseled jawline that will set you apart from the rest. Prepare to unleash your inner alpha and embark on a journey of self-improvement like never before!",
          content: "",
          id: 1,
        },
        {
          title:
            "Black Friday: The Best Time to Maximize Testosterone and Grow More Confident",
          img: "blog-img-two.jpg",
          desc: "Get ready to ignite the fire within and unleash your inner beast! Whether you’re seeking to increase your confidence, hone your self-defense skills, or maximize your physical prowess, Black Friday presents the perfect opportunity to invest in the FITVEN Freestanding Punching Bag. Designed with durability, stability, and maximum muscle building potential, this punch bag will propel your training to new levels of intensity.",
          content: "",
          id: 2,
        },
        {
          title:
            "Mindful Socializing: 5 Ways to Stay Present and Engaged in Conversations",
          img: "blog-img-three.jpg",
          desc: "In a world bustling with distractions and digital noise, building genuine connections in social interactions can feel like a rare gem. Wouldn’t it be amazing to fully immerse yourself in the present moment and leave a lasting impression on those around you? Imagine effortlessly engaging with others, being fully present, and leaving your worries behind. In this blog post, we’ll explore practical techniques to be more present, engage your senses, and cultivate gratitude, enabling you to create meaningful connections that go beyond surface-level conversations. Get ready to unlock the power of presence and embark on a journey of authentic connections.",
          content: "",
          id: 3,
        },
      ],
    };
  },
  components: {
    BlogCard,
  },
};
</script>

<style>
.blog-section {
  border-radius: 21px;
  padding: 21px;
  margin: 21px 55px;
  background-color: rgb(40, 40, 40);
}
.blog-cards {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 8px;
}

h3 {
  color: #fff;
  text-align: center;
  font-size: 29px;
}
</style>