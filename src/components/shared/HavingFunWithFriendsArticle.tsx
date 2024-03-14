import Image from "next/image";

const HavingFunWithFriendsArticle = () => {
  return (
    <div className="p-4">
      <div className="flex items-start gap-2 mb-10">
        <Image
          src="/profile-gpt.jpg"
          alt="User Profile"
          height={32}
          width={32}
          className="rounded-full"
        />
        <div>
          <h3 className="font-bold">You</h3>
          <p className="text-sm">Having fun with friends</p>
        </div>
      </div>
      <h1 className="text-xl font-bold mb-4">Having Fun with Friends</h1>
      <p className="mb-4">
        Friends are a crucial part of our lives, and having fun together
        strengthens our bonds and creates lasting memories. Whether you&apos;re
        looking for exciting activities for a gathering or simply want to spice
        up your routine hangouts, here are some ideas to consider:
      </p>
      <h2 className="text-lg font-bold mb-2">Game Night Extravaganza</h2>
      <p className="mb-4 text-sm">
        Host a game night filled with laughter and friendly competition. Break
        out classic board games like Monopoly, Scrabble, or Settlers of Catan.
        For a modern twist, try virtual multiplayer games or interactive party
        games that everyone can enjoy.
      </p>
      <h2 className="text-lg font-bold mb-2">Outdoor Adventures</h2>
      <p className="mb-4 text-sm">
        Embrace the great outdoors with adventurous activities like hiking,
        camping, or kayaking. Explore nature trails, set up camp under the
        stars, or embark on a thrilling river rafting excursion. Don&apos;t
        forget to pack snacks, sunscreen, and plenty of enthusiasm!
      </p>
      <h2 className="text-lg font-bold mb-2">Culinary Delights</h2>
      <p className="mb-4 text-sm">
        Get together for a cooking or baking extravaganza. Choose a theme, such
        as Italian cuisine or decadent desserts, and prepare delicious dishes
        together. Experiment with new recipes, share cooking tips, and indulge
        in a feast fit for kings and queens.
      </p>
      <h2 className="text-lg font-bold mb-2">Creative Collaborations</h2>
      <p className="mb-4 text-sm">
        Unleash your creativity with DIY projects or artistic endeavors. Set up
        a crafting station and make personalized gifts or home decor items.
        Alternatively, organize a painting party where everyone can express
        themselves on canvas and showcase their artistic talents.
      </p>
      <p className="text-sm">
        Whatever activities you choose, the most important thing is to enjoy
        each other&apos;s company and create cherished memories that will last a
        lifetime. So gather your friends, embrace the fun, and let the good
        times roll!
      </p>
    </div>
  );
};

export default HavingFunWithFriendsArticle;
