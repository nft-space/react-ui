export const propsFromNftObject = (nftObject) => {
  return {
    id: nftObject.id,
    imageSrc: nftObject.src,
    imageThumbnailSrc: nftObject.thumbnail_src,
    nftTitle: nftObject.title,
    artistAddress: nftObject.artist_address,
    likeCount: nftObject.like_count,
    bookmarkCount: nftObject.save_count,
    likedByUser: nftObject.liked_by_user,
    bookmarkedByUser: nftObject.saved_by_user,
  };
};

export const propsFromCollectionObject = (collectionObject) => {
  return {
    id: collectionObject.collection_id,
    artistName: collectionObject.artist_name,
    artistAddress: collectionObject.artist_address,
    avatarSrc: collectionObject.artist_src,
    coverSrc: collectionObject.collection_cover_src,
    verifiedBool: collectionObject.is_verified,
    collectionTitle: collectionObject.collection_title,
  };
};

export const propsFromArtistObject = (artistObject) => {
  return {
    artistName: artistObject.artist_name,
    artistAddress: artistObject.artist_address,
    avatarSrc: artistObject.src,
    backgroundSrc: artistObject.background_src,
    verifiedBool: artistObject.is_verified,
    followedBool: artistObject.followed_by_user,
  };
};

export const propsFromDetailsPage = (detailsPageObject) => {
  return {
    id: detailsPageObject.id,
    // Nft details
    nftSrc: detailsPageObject.src,
    nftThumbnailSrc: detailsPageObject.thumbnail_src,
    nftTitle: detailsPageObject.title,
    nftDescription: detailsPageObject.description,
    nftTagsList: detailsPageObject.tags,
    nftTraits: detailsPageObject.traits,
    nftStandard: detailsPageObject.standard,
    nftUnitName: detailsPageObject.unitname,
    nftViewCount: detailsPageObject.view_count,
    nftLikeCount: detailsPageObject.like_count,
    nftSaveCount: detailsPageObject.save_count,
    nftCommentCount: detailsPageObject.comment_count,
    // User interactions
    nftLikedByUser: detailsPageObject.liked_by_user,
    nftSavedByUser: detailsPageObject.saved_by_user,
    // Collection
    collectionName: detailsPageObject.collection_name,
    collectionId: detailsPageObject.collection_id,
    collectionTitle: detailsPageObject.collection_title,
    // Artist
    artistName: detailsPageObject.artist_name,
    artistAvatarSrc: detailsPageObject.artist_src,
    artistAddress: detailsPageObject.artist_address,
    artistFollowedByUser: detailsPageObject.followed_by_user,
    // Owners
    ownedByAddressList: detailsPageObject.owned_by,
    ownerName: detailsPageObject.owner_name,
    ownerFollowedByUser: detailsPageObject.owner_followed_by_user,
    ownerAvatarSrc: detailsPageObject.owner_src,
    // Verification
    verifiedBool: detailsPageObject.is_verified,
  };
};

export const propsFromProfilePage = (profilePageObject) => {
  return {
    artistAddress: profilePageObject.artist_address,
    artistBio: profilePageObject.user_bio,
    artistMonikor: profilePageObject.moniker,
    emailAddress: profilePageObject.email_address
      ? profilePageObject.email_address
      : "",
    avatarImage: profilePageObject.src,
    backgroundImage: profilePageObject.background_src
      ? profilePageObject.background_src
      : "/images/default-cover-background.png",
    createdItems: profilePageObject.created_items,
    // Interactions
    followersCount: profilePageObject.followers,
    followingCount: profilePageObject.following,
    followedbyUserBool: profilePageObject.followed_by_user,
    // Socials
    instagramLink: profilePageObject.instagram_link,
    twitterLink: profilePageObject.twitter_link,
    websiteLink: profilePageObject.website_link,
    // Validation
    nftSpaceUsers: profilePageObject.nft_space_users,
    isVerifiedBool: profilePageObject.is_verified,
  };
};

export const propsFromCollectionPage = (collectionPageObject) => {
  return {
    // Artist details
    artistAddress: collectionPageObject.artist_address,
    artistName: collectionPageObject.artist_name,
    artistAvatarSrc: collectionPageObject.artist_src,
    followedbyUserBool: collectionPageObject.followed_by_user,
    verifiedBool: collectionPageObject.is_verified,
    // Collection details
    collectionbackgroundSrc: collectionPageObject.collection_bg_src
      ? collectionPageObject.collection_bg_src
      : "/images/default-cover-background.png",
    collectionAvatarSrc: collectionPageObject.collection_cover_src,
    collectionDescription: collectionPageObject.collection_description,
    tagsList: collectionPageObject.collection_tags,
    collectionTitle: collectionPageObject.collection_title,
    itemCount: collectionPageObject.item_count,
    ownerCount: collectionPageObject.owner_count,
    traits: collectionPageObject.traits,
    // Links
    discordLink: collectionPageObject.discord_link,
    twitterLink: collectionPageObject.twitter_link,
    websiteLink: collectionPageObject.website_link,
  };
};
