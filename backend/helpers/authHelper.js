import bcrypt from "bcrypt";

const hashPassword = async (pass) => {
  try {
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(pass, saltRounds);
    return hashedPassword;
  } catch (error) {
    console.log(`error at bcrypt ${error}`);
  }
};

const comparePass = async (pass, hashpass) => {
  return bcrypt.compare(pass, hashpass);
};

export { hashPassword, comparePass };
