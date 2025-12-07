// Thêm route tạm thời để debug
const debugCategories = async (req, res) => {
  try {
    // 1. Lấy tất cả categories
    const categories = await Category.find().lean();
    console.log('=== Tất cả Categories ===');
    console.log(categories);

    // 2. Lấy tất cả events với category info
    const events = await Event.find()
      .populate('category')
      .lean();
    
    console.log('=== Tất cả Events với Category ===');
    events.forEach(e => {
      console.log(`Event: ${e.title}, Category ID: ${e.category}, Category Object:`, e.category);
    });

    // 3. Kiểm tra category cụ thể từ query
    const { category } = req.query;
    console.log(`\n=== Tìm kiếm Category ID: ${category} ===`);
    
    const foundCategory = await Category.findById(category).lean();
    console.log('Category found:', foundCategory);

    const eventsByCategory = await Event.find({ category: category }).lean();
    console.log(`Events with category ${category}:`, eventsByCategory);

    // 4. Thử các cách query khác nhau
    console.log('\n=== So sánh các cách query ===');
    const q1 = await Event.find({ category: category }).lean();
    console.log('Query 1 (string):', q1.length);

    const q2 = await Event.find({ category: mongoose.Types.ObjectId(category) }).lean();
    console.log('Query 2 (ObjectId):', q2.length);

    res.json({
      success: true,
      categories,
      totalEvents: events.length,
      eventsByCategory: eventsByCategory.length,
      query: category
    });
  } catch (error) {
    console.error('Debug error:', error);
    res.status(500).json({ success: false, error: error.message });
  }
};

module.exports = { debugCategories };