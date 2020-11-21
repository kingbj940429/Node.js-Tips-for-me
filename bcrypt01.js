/**
 * 회원가입
 */
router.post('/join',isNotLoggedIn, async(req, res)=>{
    const password_hash = await bcrypt.hash(req.body.password_join, 12);
    var query = `
    INSERT INTO ${process.env.DB_DATABASE}.user_information (
        user_id, 
        user_pw, 
        user_name, 
        user_email) 
    VALUES (
        '${req.body.id_join}', 
        '${password_hash}', 
        '${req.body.name_join}', 
        '${req.body.email_join}'
        );`;
    await dbPool(query);
    res.render('join');
});