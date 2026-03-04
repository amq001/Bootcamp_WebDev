
// Problem Description – Recursive Fetch with Redirect Handling

// You are required to fetch data for a given set of IDs. 
// Each response may contain a redirectId, indicating that the data should be fetched again using the new ID. 
// The process must continue until the final data is reached. 
// Your implementation should also detect and prevent infinite redirect loops.

async function fetchDeep(ids, fetcher, maxDepth = 10) {
  const fetchOne = async (id, depth = 0) => {
    if (depth > maxDepth) throw new Error("Max redirect depth exceeded");

    const res = await fetcher(id);

    if (res.redirectId) return await fetchOne(res.redirectId, depth + 1);

    return res;
  };

  const result = {};

  await Promise.all(
    Object.entries(ids).map(async ([key, id]) => {
      result[key] = await fetchOne(id);
    })
  );

  return result;
}


module.exports = fetchDeep;
