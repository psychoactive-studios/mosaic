const url = window.location.href;

export const shareLinks = {
  facebook: `https://www.facebook.com/sharer/sharer.php?u=${url}`,
  x: `https://twitter.com/intent/tweet?text=Check%20out%20this%20awesome%20website:%20${url}`,
  reddit: `https://www.reddit.com/submit?url=${url}&title=Check%20out%20this%20awesome%20website!`,
  discord: "",
};
