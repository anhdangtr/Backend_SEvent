const Event = require("../models/Event");

exports.getAllEvents = async (req, res) => {
    const events = await Event.find().populate("category");
    res.json(events);
};

exports.createEvent = async (req, res) => {
    try {
        const event = await Event.create(req.body);
        res.json(event);
    } catch (error) {
        res.status(500).json({ error });
    }
};

exports.getEventById = async (req, res) => {
    const event = await Event.findById(req.params.id);
    res.json(event);
};

exports.updateEvent = async (req, res) => {
    const event = await Event.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(event);
};

exports.deleteEvent = async (req, res) => {
    await Event.findByIdAndDelete(req.params.id);
    res.json({ message: "Event deleted" });
};

exports.toggleLikeEvent = async (req, res) => {
  try {
    const { userId } = req.user; // Lấy từ token đăng nhập
    const { eventId } = req.params; // Lấy từ URL

    // 1. Tìm user
    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ msg: 'User not found' });

    // 2. Kiểm tra xem eventId đã có trong mảng favorites chưa?
    // Lưu ý: Vì trong mảng là Object { event_id, liked_at } nên phải check sâu vào field event_id
    const index = user.favorites.findIndex(
      item => item.event_id.toString() === eventId
    );

    if (index !== -1) {
      // === TRƯỜNG HỢP ĐÃ LIKE (BỊ TRÙNG) ===
      // Logic: Xóa nó đi (Unlike)
      user.favorites.splice(index, 1); 
      await user.save();
      return res.json({ msg: 'Đã bỏ thích (Unlike)', status: 'unliked' });
    } else {
      // === TRƯỜNG HỢP CHƯA LIKE ===
      // Logic: Thêm mới vào (Like)
      user.favorites.push({ 
        event_id: eventId, 
        liked_at: new Date() 
      });
      await user.save();
      return res.json({ msg: 'Đã thích (Like)', status: 'liked' });
    }

  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
};