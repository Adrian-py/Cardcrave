interface CollectionTypes {
  collectionName: string;
  createdOn: string;
}

const Collection = (collectionData: CollectionTypes) => {
  return (
    <div className="">
      <img src="" alt="" />
      <p className="">{collectionData.collectionName}</p>
      <p className="">Created on {collectionData.createdOn}</p>
    </div>
  );
};

export default Collection;
