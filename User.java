package model;

public class User {
    private String name;
    private String mood;

    public User(String name, String mood) {
        this.name = name;
        this.mood = mood;
    }

    public String getName() {
        return name;
    }

    public String getMood() {
        return mood;
    }
}
