const errorNotify = (commit, msg = "Oop, something went wrong!!!") => {
  return commit(
    "notify/setToastMsg",
    {
      msg: msg,
      type: "error",
    },
    { root: true }
  );
};

const successNotify = (commit, msg = "Successfully!!!") => {
  return commit(
    "notify/setToastMsg",
    {
      msg: msg,
      type: "success",
    },
    { root: true }
  );
};

export { errorNotify, successNotify };
